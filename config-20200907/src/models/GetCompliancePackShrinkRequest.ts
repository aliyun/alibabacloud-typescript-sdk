// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompliancePackShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * For more information about how to obtain the compliance package ID, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and takes no effect if it is specified.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

