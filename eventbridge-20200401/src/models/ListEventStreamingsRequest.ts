// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventStreamingsRequestTags } from "./ListEventStreamingsRequestTags";


export class ListEventStreamingsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to be returned in a call. You can use this parameter and NextToken to implement paging. A maximum of 100 entries can be returned in a call.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The name of the event stream that you want to query.
   * 
   * @example
   * name
   */
  namePrefix?: string;
  /**
   * @remarks
   * If you configure Limit and excess return values exist, this parameter is returned.
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
   * The Alibaba Cloud Resource Name (ARN) of the event source.
   */
  sourceArn?: string;
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

