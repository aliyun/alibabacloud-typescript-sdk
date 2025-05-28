// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEmbeddedStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to enable the embedding feature for the work. Valid values:
   * 
   * *   true: enables embedding.
   * *   false: disables embedding.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  thirdPartAuthFlag?: boolean;
  /**
   * @remarks
   * The ID of the work.
   * 
   * *   Batch modification is supported. Separate multiple values with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 897ce25e-f993-4abd-af84-d13c5610****
   */
  worksId?: string;
  static names(): { [key: string]: string } {
    return {
      thirdPartAuthFlag: 'ThirdPartAuthFlag',
      worksId: 'WorksId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thirdPartAuthFlag: 'boolean',
      worksId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

