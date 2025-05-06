// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCuHoursResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of CU-hours consumed by a queue during a specified cycle. The value is an estimated value. Refer to your Alibaba Cloud bill for the actual number of consumed CU-hours.
   * 
   * @example
   * {2025-01-09 00:00:00=2.033333, 2025-01-09 01:00:00=2.033333, 2025-01-09 02:00:00=2.033333, 2025-01-09 03:00:00=2.033333, 2025-01-09 04:00:00=2.033333, 2025-01-09 05:00:00=2.033333, 2025-01-09 06:00:00=2.033333, 2025-01-09 07:00:00=2.033333, 2025-01-09 08:00:00=2.033333, 2025-01-09 09:00:00=1.933333, 2025-01-09 10:00:00=2.133333, 2025-01-09 11:00:00=3.100000, 2025-01-09 12:00:00=2.900000}
   */
  cuHours?: string;
  static names(): { [key: string]: string } {
    return {
      cuHours: 'cuHours',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuHours: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

