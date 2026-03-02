// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteRegisterLibraryRequest extends $dara.Model {
  dependIntegral?: number;
  marketId?: number;
  static names(): { [key: string]: string } {
    return {
      dependIntegral: 'dependIntegral',
      marketId: 'marketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependIntegral: 'number',
      marketId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

