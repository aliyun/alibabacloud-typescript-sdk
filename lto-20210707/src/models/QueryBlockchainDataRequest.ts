// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBlockchainDataRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizChainId?: string;
  contractName?: string;
  invokeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  iotDataDID?: string;
  regionId?: string;
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      bizChainId: 'BizChainId',
      contractName: 'ContractName',
      invokeType: 'InvokeType',
      iotDataDID: 'IotDataDID',
      regionId: 'RegionId',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizChainId: 'string',
      contractName: 'string',
      invokeType: 'string',
      iotDataDID: 'string',
      regionId: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

