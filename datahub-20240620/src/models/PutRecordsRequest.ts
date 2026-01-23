// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutRecordsRequestRecords extends $dara.Model {
  /**
   * @example
   * {"key1":"val1","key2":"val2"}
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["aa", "bb", "12", "12.34"]
   */
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_project
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  records?: PutRecordsRequestRecords[];
  /**
   * @example
   * 7
   */
  shardId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      records: 'Records',
      shardId: 'ShardId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      records: { 'type': 'array', 'itemType': PutRecordsRequestRecords },
      shardId: 'string',
      topicName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

