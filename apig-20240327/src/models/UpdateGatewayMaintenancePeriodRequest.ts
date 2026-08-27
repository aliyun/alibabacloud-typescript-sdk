// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayMaintenancePeriodRequestMaintenancePeriod extends $dara.Model {
  /**
   * @example
   * 02:00
   */
  endTime?: string;
  /**
   * @example
   * 02:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayMaintenancePeriodRequest extends $dara.Model {
  maintenancePeriod?: UpdateGatewayMaintenancePeriodRequestMaintenancePeriod;
  static names(): { [key: string]: string } {
    return {
      maintenancePeriod: 'maintenancePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maintenancePeriod: UpdateGatewayMaintenancePeriodRequestMaintenancePeriod,
    };
  }

  validate() {
    if(this.maintenancePeriod && typeof (this.maintenancePeriod as any).validate === 'function') {
      (this.maintenancePeriod as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

