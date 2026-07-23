// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventStreamingsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * mns
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * mnstest
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventStreamingsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per request. You can use this parameter together with NextToken to implement paging.
   * >Notice: The maximum number of entries returned per request cannot exceed 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The name prefix of the event stream.
   * 
   * @example
   * name
   */
  namePrefix?: string;
  /**
   * @remarks
   * If the number of entries exceeds the value of Limit, a NextToken is returned.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The ARN of the event target.
   * 
   * @example
   * acs:fc:cn-hangzhou:118609547428****:services/fw1.LATEST/functions/log1
   */
  sinkArn?: string;
  /**
   * @remarks
   * The ARN of the event source.
   */
  sourceArn?: string;
  /**
   * @remarks
   * The tags used for filtering.
   */
  tags?: ListEventStreamingsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      namePrefix: 'NamePrefix',
      nextToken: 'NextToken',
      sinkArn: 'SinkArn',
      sourceArn: 'SourceArn',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      namePrefix: 'string',
      nextToken: 'string',
      sinkArn: 'string',
      sourceArn: 'string',
      tags: { 'type': 'array', 'itemType': ListEventStreamingsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

