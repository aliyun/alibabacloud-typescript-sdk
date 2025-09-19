// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningDetailResponseBodyCheckDetailColumnsGrids extends $dara.Model {
  /**
   * @remarks
   * Key to detect content.
   * 
   * @example
   * Username
   */
  key?: string;
  /**
   * @remarks
   * The detection content key corresponds to the display name.
   * 
   * @example
   * UserName
   */
  showName?: string;
  /**
   * @remarks
   * Display type. Value:
   * - **grid**: Detection grid
   * - **text**: text
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      showName: 'string',
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

export class DescribeCheckWarningDetailResponseBodyCheckDetailColumns extends $dara.Model {
  /**
   * @remarks
   * Detection content list.
   */
  grids?: DescribeCheckWarningDetailResponseBodyCheckDetailColumnsGrids[];
  /**
   * @remarks
   * Key to detect content.
   * 
   * @example
   * Containername
   */
  key?: string;
  /**
   * @remarks
   * The detection content key corresponds to the display name.
   * 
   * @example
   * ContainerName
   */
  showName?: string;
  /**
   * @remarks
   * Display type. Value:
   * - **grid**: Detection grid
   * - **text**: text
   * 
   * @example
   * text
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      grids: 'Grids',
      key: 'Key',
      showName: 'ShowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grids: { 'type': 'array', 'itemType': DescribeCheckWarningDetailResponseBodyCheckDetailColumnsGrids },
      key: 'string',
      showName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grids)) {
      $dara.Model.validateArray(this.grids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckWarningDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The suggestion for the management of the risk item.
   * 
   * @example
   * You can fix it in the following ways:↵1. To configure authentication for redis service, click the redis.conf Configure complex password in requirepass, and then restart redis.↵2. In redis configuration file redis.conf The configuration is as follows: bind 127.0.0.1, only allow local access, and then restart redis
   */
  advice?: string;
  /**
   * @remarks
   * List of asset details to check.
   */
  checkDetailAssetInfo?: { [key: string]: string }[];
  /**
   * @remarks
   * Detection content details.
   */
  checkDetailColumns?: DescribeCheckWarningDetailResponseBodyCheckDetailColumns[];
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 946
   */
  checkId?: number;
  /**
   * @remarks
   * The additional information about the risk item.
   * 
   * @example
   * The redis port is open to the outside world and there is no authentication option configured. In addition to directly obtaining all the information in the database, unauthorized users can also attack the system through unauthorized access vulnerability.
   */
  description?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * Redis unauthorized access
   */
  item?: string;
  /**
   * @remarks
   * The risk level of the check item. Valid values:
   * 
   * *   **high**: The item is a high-risk item and is highlighted in red.
   * *   **medium**: The item is a medium-risk item and is highlighted in orange.
   * *   **low**: The item is a low-risk item and is highlighted in gray.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The prompt for the risk item.
   */
  prompt?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   **hc_exploit**: unauthorized access
   * *   **hc_djbh**: classified protection compliance
   * *   **hc_best_secruity**: best security practice
   * *   **hc_container**: container security
   * *   **hc_custom**: custom baseline
   * *   **cis**: Center for Internet Security (CIS) compliance
   * *   **weak_password**: weak password
   * 
   * @example
   * hc_exploit
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      checkDetailAssetInfo: 'CheckDetailAssetInfo',
      checkDetailColumns: 'CheckDetailColumns',
      checkId: 'CheckId',
      description: 'Description',
      item: 'Item',
      level: 'Level',
      prompt: 'Prompt',
      requestId: 'RequestId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      checkDetailAssetInfo: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      checkDetailColumns: { 'type': 'array', 'itemType': DescribeCheckWarningDetailResponseBodyCheckDetailColumns },
      checkId: 'number',
      description: 'string',
      item: 'string',
      level: 'string',
      prompt: 'string',
      requestId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkDetailAssetInfo)) {
      $dara.Model.validateArray(this.checkDetailAssetInfo);
    }
    if(Array.isArray(this.checkDetailColumns)) {
      $dara.Model.validateArray(this.checkDetailColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

