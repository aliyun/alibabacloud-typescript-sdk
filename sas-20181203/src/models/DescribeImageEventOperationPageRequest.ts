// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageEventOperationPageRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The keyword of the alert item.
   * 
   * @example
   * PEM
   */
  eventKey?: string;
  /**
   * @remarks
   * The name of the alert item.
   * 
   * @example
   * PEM
   */
  eventName?: string;
  /**
   * @remarks
   * The alert type.
   * 
   * *   Set the value to **sensitiveFile**.
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
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source of the alert handling rule. Valid values:
   * 
   * *   **default**: image.
   * *   **agentless**: agentless detection.
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

