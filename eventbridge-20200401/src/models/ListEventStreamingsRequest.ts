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
   * Specifies the maximum number of entries to return per request. You can use this parameter with NextToken to paginate results. <notice>The maximum number of entries returned per request cannot exceed 100.</notice>
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The prefix of the event stream name.
   * 
   * @example
   * name
   */
  namePrefix?: string;
  /**
   * @remarks
   * The pagination token. If you specify Limit and more results are available, this token is returned.
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
   * The tags used to filter results.
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

