// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLogAnalysisResponseBodyAnalysesAnalysis } from "./DescribeLogAnalysisResponseBodyAnalysesAnalysis";


export class DescribeLogAnalysisResponseBodyAnalyses extends $dara.Model {
  analysis?: DescribeLogAnalysisResponseBodyAnalysesAnalysis[];
  static names(): { [key: string]: string } {
    return {
      analysis: 'Analysis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: { 'type': 'array', 'itemType': DescribeLogAnalysisResponseBodyAnalysesAnalysis },
    };
  }

  validate() {
    if(Array.isArray(this.analysis)) {
      $dara.Model.validateArray(this.analysis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

