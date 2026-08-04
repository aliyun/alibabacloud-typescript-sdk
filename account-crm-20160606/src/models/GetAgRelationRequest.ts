// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgRelationRequest extends $dara.Model {
  agAccountType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      agAccountType: 'AgAccountType',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agAccountType: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

