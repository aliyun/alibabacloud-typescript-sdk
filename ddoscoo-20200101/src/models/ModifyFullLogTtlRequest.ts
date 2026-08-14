// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFullLogTtlRequest extends $dara.Model {
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

