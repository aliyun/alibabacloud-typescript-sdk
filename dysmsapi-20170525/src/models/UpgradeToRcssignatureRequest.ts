// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeToRCSSignatureRequest extends $dara.Model {
  /**
   * @remarks
   * 背景图片ossKey
   * 
   * @example
   * 示例值示例值
   */
  backgroundImage?: string;
  /**
   * @remarks
   * 气泡颜色
   * 
   * @example
   * 示例值示例值示例值
   */
  bubbleColor?: string;
  /**
   * @remarks
   * 行业类型
   * 
   * @example
   * 97
   */
  category?: number;
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * 示例值示例值
   */
  description?: string;
  /**
   * @remarks
   * 纬度
   * 
   * @example
   * 示例值示例值
   */
  latitude?: string;
  /**
   * @remarks
   * logo图片ossKey
   * 
   * @example
   * 示例值示例值
   */
  logo?: string;
  /**
   * @remarks
   * 经度
   * 
   * @example
   * 示例值示例值
   */
  longitude?: string;
  /**
   * @remarks
   * 办公地址
   * 
   * @example
   * 示例值示例值
   */
  officeAddress?: string;
  /**
   * @remarks
   * 服务邮箱
   * 
   * @example
   * 示例值示例值
   */
  serviceEmail?: string;
  /**
   * @remarks
   * 服务电话
   * 
   * @example
   * 示例值示例值示例值
   */
  servicePhone?: string;
  /**
   * @remarks
   * 服务条款URL
   * 
   * @example
   * 示例值示例值
   */
  serviceTerms?: string;
  /**
   * @remarks
   * 服务官网URL
   * 
   * @example
   * 示例值示例值
   */
  serviceWebsite?: string;
  /**
   * @remarks
   * 签名名称
   * 
   * @example
   * 示例值示例值
   */
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      backgroundImage: 'BackgroundImage',
      bubbleColor: 'BubbleColor',
      category: 'Category',
      description: 'Description',
      latitude: 'Latitude',
      logo: 'Logo',
      longitude: 'Longitude',
      officeAddress: 'OfficeAddress',
      serviceEmail: 'ServiceEmail',
      servicePhone: 'ServicePhone',
      serviceTerms: 'ServiceTerms',
      serviceWebsite: 'ServiceWebsite',
      signName: 'SignName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundImage: 'string',
      bubbleColor: 'string',
      category: 'number',
      description: 'string',
      latitude: 'string',
      logo: 'string',
      longitude: 'string',
      officeAddress: 'string',
      serviceEmail: 'string',
      servicePhone: 'string',
      serviceTerms: 'string',
      serviceWebsite: 'string',
      signName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

