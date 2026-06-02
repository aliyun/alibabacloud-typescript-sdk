// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaKnowledgeBase extends $dara.Model {
  /**
   * @example
   * 20464374909***
   */
  creator?: string;
  /**
   * @example
   * order knowledgebase
   */
  description?: string;
  /**
   * @example
   * vehicle
   */
  domain?: string;
  /**
   * @example
   * {"keywords":"sales,vehicle brand"}
   */
  extraInfo?: string;
  /**
   * @example
   * 2026-05-14 11:30:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2026-05-14 11:30:39
   */
  gmtModified?: string;
  /**
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @example
   * order_kb
   */
  name?: string;
  /**
   * @example
   * 1
   */
  state?: number;
  /**
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

