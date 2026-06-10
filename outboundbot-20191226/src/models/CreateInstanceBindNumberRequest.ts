// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceBindNumberRequest extends $dara.Model {
  /**
   * @remarks
   * List of outbound calling instance IDs.
   * 
   * > Modifying this parameter overwrites previous parameters. Setting this parameter to empty clears the number binding list.
   * 
   * @example
   * 90515b5-6115-4ccf-83e2-52d5bfaf2ddf
   * ,123*****09,456*****08
   */
  instanceList?: string;
  /**
   * @remarks
   * The number to bind (required).
   * 
   * > For the list of numbers, see the Number parameter returned by the ListAllTenantBindNumberBinding API.
   * 
   * @example
   * 15005059355
   */
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: 'string',
      number: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

