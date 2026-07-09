// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NotifyStrategyIdFilter extends $dara.Model {
  /**
   * @remarks
   * The exact ID of the notification strategy to retrieve.
   */
  eq?: string;
  static names(): { [key: string]: string } {
    return {
      eq: 'eq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

