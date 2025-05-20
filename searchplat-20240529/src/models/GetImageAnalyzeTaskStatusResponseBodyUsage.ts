// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageAnalyzeTaskStatusResponseBodyUsage extends $dara.Model {
  pvCount?: number;
  tokenCount?: number;
  static names(): { [key: string]: string } {
    return {
      pvCount: 'pv_count',
      tokenCount: 'token_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pvCount: 'number',
      tokenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

