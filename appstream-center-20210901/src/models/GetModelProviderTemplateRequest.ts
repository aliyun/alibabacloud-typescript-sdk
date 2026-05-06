// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModelProviderTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mpt-xxxx
   */
  providerTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      providerTemplateId: 'ProviderTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

