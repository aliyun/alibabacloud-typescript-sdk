// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBase extends $dara.Model {
  /**
   * @remarks
   * The creator of the knowledge base.
   * 
   * @example
   * 20464374909***
   */
  creator?: string;
  /**
   * @remarks
   * The description of the knowledge base.
   * 
   * @example
   * order knowledgebase
   */
  description?: string;
  /**
   * @remarks
   * The domain of the knowledge base.
   * 
   * @example
   * vehicle
   */
  domain?: string;
  /**
   * @remarks
   * Additional information about the knowledge base.
   * 
   * @example
   * {"keywords":"sales,vehicle brand"}
   */
  extraInfo?: string;
  /**
   * @remarks
   * The time when the knowledge base was created.
   * 
   * @example
   * 2026-05-14 11:30:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the knowledge base was last modified.
   * 
   * @example
   * 2026-05-14 11:30:39
   */
  gmtModified?: string;
  /**
   * @remarks
   * The UUID of the knowledge base.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The name of the knowledge base.
   * 
   * @example
   * order_kb
   */
  name?: string;
  /**
   * @remarks
   * The state of the knowledge base. Valid values include 0 (No data) and 1 (Available).
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * The tag of the knowledge base.
   * 
   * @example
   * 4phsj52f81ymlm***
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      description: 'Description',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      kbUuid: 'KbUuid',
      name: 'Name',
      state: 'State',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      description: 'string',
      domain: 'string',
      extraInfo: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      kbUuid: 'string',
      name: 'string',
      state: 'number',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

