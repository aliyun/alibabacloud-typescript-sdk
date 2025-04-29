// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePatternTypesResponseBodyPatternTypes } from "./DescribePatternTypesResponseBodyPatternTypes";


export class DescribePatternTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types that meet the specified requirements.
   */
  patternTypes?: DescribePatternTypesResponseBodyPatternTypes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patternTypes: 'PatternTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patternTypes: { 'type': 'array', 'itemType': DescribePatternTypesResponseBodyPatternTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patternTypes)) {
      $dara.Model.validateArray(this.patternTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

