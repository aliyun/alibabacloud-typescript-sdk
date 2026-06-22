// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningDetailResponseBodyCheckDetailColumnsGrids extends $dara.Model {
  /**
   * @remarks
   * The key of the check content.
   * 
   * @example
   * Username
   */
  key?: string;
  /**
   * @remarks
   * The display name that corresponds to the key of the check content.
   * 
   * @example
   * UserName
   */
  showName?: string;
  /**
   * @remarks
   * The display type. Valid values:
   * - **grid**: grid
   * - **text**: text.
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
   * The list of check content.
   */
  grids?: DescribeCheckWarningDetailResponseBodyCheckDetailColumnsGrids[];
  /**
   * @remarks
   * The key of the check content.
   * 
   * @example
   * Containername
   */
  key?: string;
  /**
   * @remarks
   * The display name that corresponds to the key of the check content.
   * 
   * @example
   * ContainerName
   */
  showName?: string;
  /**
   * @remarks
   * The display type. Valid values:
   * - **grid**: grid
   * - **text**: text.
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
   * The hardening suggestion for the baseline check risk item.
   * 
   * @example
   * You can fix it in the following ways:↵1. To configure authentication for redis service, click the redis.conf Configure complex password in requirepass, and then restart redis.↵2. In redis configuration file redis.conf The configuration is as follows: bind 127.0.0.1, only allow local access, and then restart redis
   */
  advice?: string;
  /**
   * @remarks
   * The list of checked asset details.
   */
  checkDetailAssetInfo?: { [key: string]: string }[];
  /**
   * @remarks
   * The details of the check content.
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
   * The supplementary description of the baseline check risk item.
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
   * - **high**: High risk, highlighted in red.
   * 
   * - **medium**: Medium risk, highlighted in orange.
   * 
   * - **low**: Low risk, highlighted in gray.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The check prompt for the baseline check risk item.
   */
  prompt?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the baseline check item.
   * > You can call the [DescribeRiskType](~~DescribeRiskType~~) operation to view all baseline types.
   * 
   * @example
   * Security audit
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

