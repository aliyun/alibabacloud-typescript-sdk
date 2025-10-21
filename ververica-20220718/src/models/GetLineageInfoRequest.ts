// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLineageInfoParams } from "./GetLineageInfoParams";


export class GetLineageInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters about the lineage information.
   */
  body?: GetLineageInfoParams;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: GetLineageInfoParams,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

