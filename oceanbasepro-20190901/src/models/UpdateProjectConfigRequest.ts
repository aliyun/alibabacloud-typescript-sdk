// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateProjectConfigRequestCommonTransferConfig } from "./UpdateProjectConfigRequestCommonTransferConfig";
import { UpdateProjectConfigRequestFullTransferConfig } from "./UpdateProjectConfigRequestFullTransferConfig";
import { UpdateProjectConfigRequestIncrTransferConfig } from "./UpdateProjectConfigRequestIncrTransferConfig";
import { UpdateProjectConfigRequestReverseIncrTransferConfig } from "./UpdateProjectConfigRequestReverseIncrTransferConfig";


export class UpdateProjectConfigRequest extends $dara.Model {
  commonTransferConfig?: UpdateProjectConfigRequestCommonTransferConfig;
  fullTransferConfig?: UpdateProjectConfigRequestFullTransferConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_fe****
   */
  id?: string;
  incrTransferConfig?: UpdateProjectConfigRequestIncrTransferConfig;
  reverseIncrTransferConfig?: UpdateProjectConfigRequestReverseIncrTransferConfig;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfig: 'CommonTransferConfig',
      fullTransferConfig: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfig: 'IncrTransferConfig',
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfig: UpdateProjectConfigRequestCommonTransferConfig,
      fullTransferConfig: UpdateProjectConfigRequestFullTransferConfig,
      id: 'string',
      incrTransferConfig: UpdateProjectConfigRequestIncrTransferConfig,
      reverseIncrTransferConfig: UpdateProjectConfigRequestReverseIncrTransferConfig,
    };
  }

  validate() {
    if(this.commonTransferConfig && typeof (this.commonTransferConfig as any).validate === 'function') {
      (this.commonTransferConfig as any).validate();
    }
    if(this.fullTransferConfig && typeof (this.fullTransferConfig as any).validate === 'function') {
      (this.fullTransferConfig as any).validate();
    }
    if(this.incrTransferConfig && typeof (this.incrTransferConfig as any).validate === 'function') {
      (this.incrTransferConfig as any).validate();
    }
    if(this.reverseIncrTransferConfig && typeof (this.reverseIncrTransferConfig as any).validate === 'function') {
      (this.reverseIncrTransferConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

