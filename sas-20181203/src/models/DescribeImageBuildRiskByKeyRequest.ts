// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageBuildRiskByKeyRequest extends $dara.Model {
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
   * The UUID of the image.
   * 
   * @example
   * a910053dd4710173ecc9e9d8931f****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * The key of the risk rule. 
   * > You can call the [DescribeImageBuildRiskList](~~DescribeImageBuildRiskList~~) operation to obtain the value of **RiskKey**.
   * 
   * @example
   * no_user
   */
  riskKey?: string;
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   **0**: unhandled.
   * *   **1**: ignored.
   * *   **2**: false positive.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      imageUuid: 'ImageUuid',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskKey: 'RiskKey',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      imageUuid: 'string',
      lang: 'string',
      pageSize: 'number',
      riskKey: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

