// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyProductRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the source product.
   * 
   * > The source product can belong to the current account or belong to a product portfolio that is shared by another account.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:servicecatalog:cn-hangzhou:146611588617****:product/prod-bp18r7q127****
   */
  sourceProductArn?: string;
  /**
   * @remarks
   * The name of the destination product.
   * 
   * @example
   * DEMO-ECS
   */
  targetProductName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceProductArn: 'SourceProductArn',
      targetProductName: 'TargetProductName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceProductArn: 'string',
      targetProductName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

