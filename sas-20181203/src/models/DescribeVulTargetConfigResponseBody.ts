// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulTargetConfigResponseBodyTargetConfigs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the vulnerability scan feature is enabled for the server.
   * 
   * *   **off**: disabled
   * *   **on**: enabled
   * 
   * @example
   * on
   */
  config?: string;
  /**
   * @remarks
   * Indicates whether the vulnerability scan feature is enabled for all servers. Valid values:
   * 
   * *   **off**: disabled
   * *   **on**: enabled
   * 
   * @example
   * on
   */
  overAllConfig?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **emg**: urgent vulnerability
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      overAllConfig: 'OverAllConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      overAllConfig: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulTargetConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9FBC6E47-7508-58C9-9E76-528E118CB1CC
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the configurations.
   */
  targetConfigs?: DescribeVulTargetConfigResponseBodyTargetConfigs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetConfigs: 'TargetConfigs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetConfigs: { 'type': 'array', 'itemType': DescribeVulTargetConfigResponseBodyTargetConfigs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetConfigs)) {
      $dara.Model.validateArray(this.targetConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

