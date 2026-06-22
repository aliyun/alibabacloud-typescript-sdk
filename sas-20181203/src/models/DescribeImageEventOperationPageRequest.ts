// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageEventOperationPageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword of the alert metric.
   * 
   * @example
   * PEM
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the alert metric.
   * 
   * @example
   * PEM
   */
  eventName?: string;
  /**
   * @remarks
   * The alerting type. Valid values:
   * - **sensitiveFile**: sensitive file tampering.
   * 
   * @example
   * sensitiveFile
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the alert handling rule.
   * 
   * @example
   * 49616
   */
  id?: number;
  /**
   * @remarks
   * The language of the content in the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the alert handling rule. Valid values:
   * - **default**: image
   * - **agentless**: agentless detection.
   * 
   * @example
   * agentless
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      eventKey: 'EventKey',
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      lang: 'Lang',
      pageSize: 'PageSize',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      eventKey: 'string',
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      lang: 'string',
      pageSize: 'number',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

