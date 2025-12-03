// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineEmasArtifactUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 122
   */
  serviceConnectionId?: number;
  static names(): { [key: string]: string } {
    return {
      serviceConnectionId: 'serviceConnectionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceConnectionId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

