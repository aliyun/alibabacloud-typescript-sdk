// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BeeBotAssociateResponseBodyDataAssociate extends $dara.Model {
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {}
   */
  meta?: string;
  /**
   * @remarks
   * The title of the related question.
   * 
   * @example
   * Policy on Withdrawal of Housing Provident Fund
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

