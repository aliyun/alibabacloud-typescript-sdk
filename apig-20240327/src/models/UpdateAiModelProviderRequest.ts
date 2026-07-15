// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiModelProviderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 千问云 / 阿里云百炼
   */
  displayName?: string;
  serviceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      serviceIds: 'serviceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      serviceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.serviceIds)) {
      $dara.Model.validateArray(this.serviceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

