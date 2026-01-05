// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPortfoliosResponseBodyPortfolioDetails extends $dara.Model {
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 2022-04-12T06:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * 产品组合描述
   */
  description?: string;
  /**
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:portfolio/port-bp1yt7582g****
   */
  portfolioArn?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  portfolioName?: string;
  /**
   * @remarks
   * 产品组合提供方
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      portfolioArn: 'PortfolioArn',
      portfolioId: 'PortfolioId',
      portfolioName: 'PortfolioName',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      portfolioArn: 'string',
      portfolioId: 'string',
      portfolioName: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPortfoliosResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  portfolioDetails?: ListPortfoliosResponseBodyPortfolioDetails[];
  /**
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      portfolioDetails: 'PortfolioDetails',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      portfolioDetails: { 'type': 'array', 'itemType': ListPortfoliosResponseBodyPortfolioDetails },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.portfolioDetails)) {
      $dara.Model.validateArray(this.portfolioDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

