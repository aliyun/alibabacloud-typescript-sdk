// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWhatAppTemplateRequest extends $dara.Model {
  /**
   * @example
   * 2983883892
   */
  custSpaceId?: string;
  /**
   * @example
   * {}
   */
  hetuParams?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      hetuParams: 'HetuParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
      hetuParams: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

