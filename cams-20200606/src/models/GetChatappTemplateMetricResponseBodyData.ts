// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChatappTemplateMetricResponseBodyDataCliented } from "./GetChatappTemplateMetricResponseBodyDataCliented";


export class GetChatappTemplateMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The statistics on button clicks.
   */
  cliented?: GetChatappTemplateMetricResponseBodyDataCliented[];
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 6
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end of the time range you queried.
   * 
   * @example
   * 1668138331485
   */
  end?: number;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of read messages.
   * 
   * @example
   * 3
   */
  readCount?: number;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The beginning of the time range you queried.
   * 
   * @example
   * 1673919240001
   */
  start?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 83837774838*****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      cliented: 'Cliented',
      deliveredCount: 'DeliveredCount',
      end: 'End',
      language: 'Language',
      readCount: 'ReadCount',
      sentCount: 'SentCount',
      start: 'Start',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cliented: { 'type': 'array', 'itemType': GetChatappTemplateMetricResponseBodyDataCliented },
      deliveredCount: 'number',
      end: 'number',
      language: 'string',
      readCount: 'number',
      sentCount: 'number',
      start: 'number',
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cliented)) {
      $dara.Model.validateArray(this.cliented);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

