// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPortfolioResponseBodyPortfolioDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the product portfolio was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-12T06:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the product portfolio.
   * 
   * @example
   * The description of the product portfolio.
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the product portfolio.
   * 
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:portfolio/port-bp1yt7582g****
   */
  portfolioArn?: string;
  /**
   * @remarks
   * The ID of the product portfolio.
   * 
   * @example
   * port-bp1yt7582g****
   */
  portfolioId?: string;
  /**
   * @remarks
   * The name of the product portfolio.
   * 
   * @example
   * DEMO-IT services
   */
  portfolioName?: string;
  /**
   * @remarks
   * The provider of the product portfolio.
   * 
   * @example
   * IT team
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

export class GetPortfolioResponseBodyTagOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tag option is enabled. Valid values:
   * 
   * - true (default)
   * - false
   * 
   * @example
   * true
   */
  active?: boolean;
  /**
   * @remarks
   * The key of the tag option.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The ID of the owner of the tag option.
   * 
   * @example
   * 133413081827****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the tag option.
   * 
   * @example
   * tag-bp1q65xd3j****
   */
  tagOptionId?: string;
  /**
   * @remarks
   * The value of the tag option.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      key: 'Key',
      owner: 'Owner',
      tagOptionId: 'TagOptionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      key: 'string',
      owner: 'string',
      tagOptionId: 'string',
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

export class GetPortfolioResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the product portfolio.
   */
  portfolioDetail?: GetPortfolioResponseBodyPortfolioDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0FEEF92D-4052-5202-87D0-3D8EC16F81BF
   */
  requestId?: string;
  /**
   * @remarks
   * The tag options associated with the service portfolio.
   */
  tagOptions?: GetPortfolioResponseBodyTagOptions[];
  static names(): { [key: string]: string } {
    return {
      portfolioDetail: 'PortfolioDetail',
      requestId: 'RequestId',
      tagOptions: 'TagOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portfolioDetail: GetPortfolioResponseBodyPortfolioDetail,
      requestId: 'string',
      tagOptions: { 'type': 'array', 'itemType': GetPortfolioResponseBodyTagOptions },
    };
  }

  validate() {
    if(this.portfolioDetail && typeof (this.portfolioDetail as any).validate === 'function') {
      (this.portfolioDetail as any).validate();
    }
    if(Array.isArray(this.tagOptions)) {
      $dara.Model.validateArray(this.tagOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

