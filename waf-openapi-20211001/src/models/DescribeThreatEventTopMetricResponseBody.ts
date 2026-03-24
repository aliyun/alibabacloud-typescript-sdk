// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeThreatEventTopMetricResponseBodyTopMetrics extends $dara.Model {
  /**
   * @remarks
   * The number of attacks.
   * 
   * @example
   * 20
   */
  cnt?: number;
  /**
   * @remarks
   * The country where the source IP address of the attack is located.
   * 
   * > This parameter is returned only when **Metric** is set to **src**.
   * 
   * @example
   * CN
   */
  country?: string;
  /**
   * @remarks
   * The region where the source IP address of the attack is located.
   * 
   * > This parameter is returned only when **Metric** is set to **src**.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The attack value. The meaning of this parameter varies based on the value of **Metric**.
   * 
   * - If **Metric** is set to **time**, this parameter indicates the attack time.
   * 
   * - If **Metric** is set to **src**, this parameter indicates the source IP address of the attack.
   * 
   * - If **Metric** is set to **target**, this parameter indicates the URL of the attack request.
   * 
   * - If **Metric** is set to **type**, this parameter indicates the attack type. For example, **dirscan** indicates directory scan and **webscan** indicates web scan. For more information about other attack types, see the description of the **detectType** parameter for custom regular expression rules (**regular_custom**) in the [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html) operation.
   * 
   * - If **Metric** is set to **tools**, this parameter indicates the attack tool.
   * 
   * @example
   * 115.28.209.212
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      cnt: 'Cnt',
      country: 'Country',
      region: 'Region',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnt: 'number',
      country: 'string',
      region: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeThreatEventTopMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12EF3845-CCEB-4B84-AE60-2B49B*****EE5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of statistics.
   */
  topMetrics?: DescribeThreatEventTopMetricResponseBodyTopMetrics[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topMetrics: 'TopMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topMetrics: { 'type': 'array', 'itemType': DescribeThreatEventTopMetricResponseBodyTopMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.topMetrics)) {
      $dara.Model.validateArray(this.topMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

