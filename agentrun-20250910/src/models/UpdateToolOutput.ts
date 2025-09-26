// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateToolData } from "./UpdateToolData";


export class UpdateToolOutput extends $dara.Model {
  data?: UpdateToolData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      message: 'message',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateToolData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

