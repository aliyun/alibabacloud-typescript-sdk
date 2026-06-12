// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMeteringDataRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters are described as follows:
   * 
   * - InstanceId: The ID of the Alibaba Cloud Marketplace instance. The parameter type is String.
   * 
   * - StartTime: The start time of the metering. The unit is seconds. The format is a UNIX timestamp. The parameter type is Long.
   * 
   * - EndTime: The end time of the metering. The unit is seconds. The format is a UNIX timestamp. The parameter type is Long.
   * 
   * - `Entities`: The metering entity object. The parameter type is List\\<Map>.
   * 
   *   - Key: The name of the metering item property. The parameter type is String.
   * 
   *     - Frequency: The number of times used.
   * 
   *     - `Period`: The usage duration in seconds.
   *       <props="intl">Note: The duration in the request parameter is measured in seconds, but the billing unit is hours. The duration is converted to hours for billing. For example, if you push a usage of 1800 for the period from 19:00 to 20:00 and the price is USD 1/hour, the hourly bill for this period is 1800 / 3600 × 1 = USD 0.5. If the fee is a decimal, it is truncated to two decimal places.
   * 
   *     - `Storage`: The storage space used, in bytes.
   *       <props="intl">Note: The unit in the request parameter is bytes, but the billing unit is MB. The value is converted to MB for billing. For example, if you push a usage of 524288 for the period from 19:00 to 20:00 and the price is USD 1/MB, the hourly bill for this period is 524288 / 1024 / 1024 × 1 = USD 0.5. If the fee is a decimal, it is truncated to two decimal places.
   * 
   *     - `NetworkOut`: The outbound data transfer, in bits.
   *       <props="intl">Note: The unit in the request parameter is bits, but the billing unit is Mb. The value is converted to Mb for billing. For example, if you push a usage of 524288 for the period from 19:00 to 20:00 and the price is USD 1/Mb, the hourly bill for this period is 524288 / 1024 / 1024 × 1 = USD 0.5. If the fee is a decimal, it is truncated to two decimal places.
   * 
   *     - `NetworkIn`: The inbound data transfer, in bits.
   *       <props="intl">Note: The unit in the request parameter is bits, but the billing unit is Mb. The value is converted to Mb for billing. For example, if you push a usage of 524288 for the period from 19:00 to 20:00 and the price is USD 1/Mb, the hourly bill for this period is 524288 / 1024 / 1024 × 1 = USD 0.5. If the fee is a decimal, it is truncated to two decimal places.
   * 
   *     - Character: The number of characters.
   * 
   *     - DailyActiveUser: The number of daily active users (DAU).
   * 
   *     - PeriodMin: The usage duration in minutes.
   * 
   *     - VirtualCpu: The number of vCPU cores.
   * 
   *       - Unit: The number of units.
   * 
   *       - Memory: The memory size in GB.
   * 
   *   - Value: The metering value. The value must be greater than or equal to 0. The parameter type is Integer.
   * 
   * **Note**:
   * 
   * - For products with real-time billing, the interval between StartTime and EndTime can be of any length. EndTime must be later than StartTime.
   * 
   * - For products that are not billed in real-time, such as those billed by the hour, day, or month, the interval between StartTime and EndTime must be longer than 5 minutes.
   * 
   * - When pushing metering data in batches, the InstanceId property must be for instances of the same product. Pushing data for instances of multiple products at the same time is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"StartTime":1711527396,"EndTime":1711527397,"Entities":[{"Key":"Unit","Value":"0"}]}]
   */
  metering?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * si-0e6fca6a51a54420****
   */
  serviceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
      serviceInstanceId: 'ServiceInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
      serviceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

