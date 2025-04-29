// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * true
   */
  enableHighDensityMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableHighDensityMode: 'EnableHighDensityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableHighDensityMode: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

