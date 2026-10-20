// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the edge zone.
   * 
   * If you do not specify this parameter, the IDs of all active edge zones are returned.
   * 
   * @example
   * cn-dalian-unicom
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

