// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWildcardByTopicRequest extends $dara.Model {
  /**
   * @remarks
   * The parent topic.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  firstTopic?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-0pp1ldu****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number of the results to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The maximum number of records to display per page.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      firstTopic: 'FirstTopic',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTopic: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

