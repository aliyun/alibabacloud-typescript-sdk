// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue } from "./DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue";


export class DescribeLogAnalysisResponseBodyAnalysesAnalysis extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 0c7154xxxx
   */
  metaKey?: string;
  /**
   * @remarks
   * The log dump information of the file system.
   */
  metaValue?: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue;
  static names(): { [key: string]: string } {
    return {
      metaKey: 'MetaKey',
      metaValue: 'MetaValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaKey: 'string',
      metaValue: DescribeLogAnalysisResponseBodyAnalysesAnalysisMetaValue,
    };
  }

  validate() {
    if(this.metaValue && typeof (this.metaValue as any).validate === 'function') {
      (this.metaValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

