// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeInstanceAzoneRequest extends $dara.Model {
  changeVSwitch?: boolean;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdsjiii1b49****
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  drdsRegionId?: string;
  newVSwitch?: string;
  /**
   * @remarks
   * The source zone of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-B
   */
  originAzoneId?: string;
  /**
   * @remarks
   * The destination zone to which you want to modify
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-A
   */
  targetAzoneId?: string;
  static names(): { [key: string]: string } {
    return {
      changeVSwitch: 'ChangeVSwitch',
      drdsInstanceId: 'DrdsInstanceId',
      drdsRegionId: 'DrdsRegionId',
      newVSwitch: 'NewVSwitch',
      originAzoneId: 'OriginAzoneId',
      targetAzoneId: 'TargetAzoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeVSwitch: 'boolean',
      drdsInstanceId: 'string',
      drdsRegionId: 'string',
      newVSwitch: 'string',
      originAzoneId: 'string',
      targetAzoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

