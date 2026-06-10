// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBeebotIntentUserSayRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword in the user utterance.
   * 
   * @example
   * 知道
   */
  content?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e5035654-1745-484a-8c5b-165f7c7bcd79
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10717802
   */
  intentId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to display on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c5c5d8c0-c0f1-48a7-be2b-dc46006d888a
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      instanceId: 'string',
      intentId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

