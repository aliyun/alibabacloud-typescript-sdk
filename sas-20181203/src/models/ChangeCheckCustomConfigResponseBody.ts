// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCheckCustomConfigResponseBodyIllegalCustomConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the custom configuration item, which is unique in a check item.
   * 
   * @example
   * SessionTimeMax
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckCustomConfigResponseBodyIllegalRepairConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the invalid parameter required for fixing a risk item.
   * 
   * @example
   * SessionTimeMax
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeCheckCustomConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the invalid custom configuration items of the check item.
   */
  illegalCustomConfigs?: ChangeCheckCustomConfigResponseBodyIllegalCustomConfigs[];
  /**
   * @remarks
   * An array that consists of the invalid parameters required for fixing risk items.
   */
  illegalRepairConfigs?: ChangeCheckCustomConfigResponseBodyIllegalRepairConfigs[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * DA8133CC-CCA0-5CF2-BF64-FE7D52C44***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      illegalCustomConfigs: 'IllegalCustomConfigs',
      illegalRepairConfigs: 'IllegalRepairConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      illegalCustomConfigs: { 'type': 'array', 'itemType': ChangeCheckCustomConfigResponseBodyIllegalCustomConfigs },
      illegalRepairConfigs: { 'type': 'array', 'itemType': ChangeCheckCustomConfigResponseBodyIllegalRepairConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.illegalCustomConfigs)) {
      $dara.Model.validateArray(this.illegalCustomConfigs);
    }
    if(Array.isArray(this.illegalRepairConfigs)) {
      $dara.Model.validateArray(this.illegalRepairConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

