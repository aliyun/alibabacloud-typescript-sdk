// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchGenerationResponseBodyPayloadOutputAgentContextBizContextTokenCalculate extends $dara.Model {
  firstTokenTime?: number;
  outputAvgTime?: number;
  searchTime?: number;
  time?: number;
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      firstTokenTime: 'FirstTokenTime',
      outputAvgTime: 'OutputAvgTime',
      searchTime: 'SearchTime',
      time: 'Time',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstTokenTime: 'number',
      outputAvgTime: 'number',
      searchTime: 'number',
      time: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

