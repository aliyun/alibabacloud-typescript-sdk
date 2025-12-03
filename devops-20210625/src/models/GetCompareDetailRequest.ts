// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompareDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c9fb781f3d66ef6ee60bdd5c414f5106454b1426
   */
  from?: string;
  /**
   * @example
   * 24 * 1024 * 1024
   */
  maxDiffByte?: number;
  /**
   * @example
   * 5000
   */
  maxDiffFile?: number;
  /**
   * @example
   * false
   */
  mergeBase?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b8f6f28520b1936aafe2e638373e19ccafa42b02
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      maxDiffByte: 'maxDiffByte',
      maxDiffFile: 'maxDiffFile',
      mergeBase: 'mergeBase',
      organizationId: 'organizationId',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      maxDiffByte: 'number',
      maxDiffFile: 'number',
      mergeBase: 'boolean',
      organizationId: 'string',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

