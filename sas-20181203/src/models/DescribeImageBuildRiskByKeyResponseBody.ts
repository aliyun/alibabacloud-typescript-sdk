// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBuildRiskByKeyResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The suggestion on how to handle the risk.
   * 
   * @example
   * do not use root user
   */
  advice?: string;
  /**
   * @remarks
   * The description of the suggestion on how to handle the risk.
   * 
   * @example
   * the root user has excessive permissions
   */
  description?: string;
  /**
   * @remarks
   * The image build command.
   * 
   * @example
   * user root
   */
  layerCmd?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 6ec898e6274f942e0e4a053eff1c3119026a6704e56cff206b2cec71f636****
   */
  layerDigest?: string;
  /**
   * @remarks
   * The prompt message on the risk.
   * 
   * @example
   * the root user has excessive permissions
   */
  promt?: string;
  /**
   * @remarks
   * The type key of the risk rule.
   * 
   * @example
   * other
   */
  riskClass?: string;
  /**
   * @remarks
   * The type name of the risk rule.
   * 
   * @example
   * other
   */
  riskClassName?: string;
  /**
   * @remarks
   * The key of the risk rule.
   * 
   * @example
   * no_user
   */
  riskKey?: string;
  /**
   * @remarks
   * The name of the risk rule.
   * 
   * @example
   * no_user
   */
  riskKeyName?: string;
  /**
   * @remarks
   * The risk level. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
      description: 'Description',
      layerCmd: 'LayerCmd',
      layerDigest: 'LayerDigest',
      promt: 'Promt',
      riskClass: 'RiskClass',
      riskClassName: 'RiskClassName',
      riskKey: 'RiskKey',
      riskKeyName: 'RiskKeyName',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: 'string',
      description: 'string',
      layerCmd: 'string',
      layerDigest: 'string',
      promt: 'string',
      riskClass: 'string',
      riskClassName: 'string',
      riskKey: 'string',
      riskKeyName: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBuildRiskByKeyResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 109
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBuildRiskByKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The risks.
   */
  list?: DescribeImageBuildRiskByKeyResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeImageBuildRiskByKeyResponseBodyDataPageInfo;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageInfo: 'PageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeImageBuildRiskByKeyResponseBodyDataList },
      pageInfo: DescribeImageBuildRiskByKeyResponseBodyDataPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageBuildRiskByKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeImageBuildRiskByKeyResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52870893-48A7-5A9E-9E05-6253E5B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeImageBuildRiskByKeyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

