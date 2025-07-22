// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSnatEntryRequest extends $dara.Model {
  eipAffinity?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  snatEntryName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snatIp?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  snatTableId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sourceCIDR?: string;
  static names(): { [key: string]: string } {
    return {
      eipAffinity: 'EipAffinity',
      regionId: 'RegionId',
      snatEntryName: 'SnatEntryName',
      snatIp: 'SnatIp',
      snatTableId: 'SnatTableId',
      sourceCIDR: 'SourceCIDR',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAffinity: 'number',
      regionId: 'string',
      snatEntryName: 'string',
      snatIp: 'string',
      snatTableId: 'string',
      sourceCIDR: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

