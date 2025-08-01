// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MiguLivePullToPushStartRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  miguData?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      miguData: 'MiguData',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      miguData: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

