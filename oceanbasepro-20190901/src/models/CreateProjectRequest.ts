// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestCommonTransferConfig } from "./CreateProjectRequestCommonTransferConfig";
import { CreateProjectRequestFullTransferConfig } from "./CreateProjectRequestFullTransferConfig";
import { CreateProjectRequestIncrTransferConfig } from "./CreateProjectRequestIncrTransferConfig";
import { CreateProjectRequestReverseIncrTransferConfig } from "./CreateProjectRequestReverseIncrTransferConfig";
import { CreateProjectRequestStructTransferConfig } from "./CreateProjectRequestStructTransferConfig";
import { CreateProjectRequestTransferMapping } from "./CreateProjectRequestTransferMapping";


export class CreateProjectRequest extends $dara.Model {
  commonTransferConfig?: CreateProjectRequestCommonTransferConfig;
  /**
   * @example
   * true
   */
  enableFullTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableFullVerify?: boolean;
  /**
   * @example
   * true
   */
  enableIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableReverseIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableStructTransfer?: boolean;
  fullTransferConfig?: CreateProjectRequestFullTransferConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: string;
  incrTransferConfig?: CreateProjectRequestIncrTransferConfig;
  labelIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * open_api_create_project/oacp_xxx
   */
  ossKey?: string;
  reverseIncrTransferConfig?: CreateProjectRequestReverseIncrTransferConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_4j0cz****
   */
  sinkEndpointId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e_4j0c12z****
   */
  sourceEndpointId?: string;
  structTransferConfig?: CreateProjectRequestStructTransferConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  transferMapping?: CreateProjectRequestTransferMapping;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MIGRATION
   */
  type?: string;
  /**
   * @example
   * true
   */
  useOss?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * g_abcdefj***
   */
  workerGradeId?: string;
  static names(): { [key: string]: string } {
    return {
      commonTransferConfig: 'CommonTransferConfig',
      enableFullTransfer: 'EnableFullTransfer',
      enableFullVerify: 'EnableFullVerify',
      enableIncrTransfer: 'EnableIncrTransfer',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferConfig: 'FullTransferConfig',
      id: 'Id',
      incrTransferConfig: 'IncrTransferConfig',
      labelIds: 'LabelIds',
      name: 'Name',
      ossKey: 'OssKey',
      reverseIncrTransferConfig: 'ReverseIncrTransferConfig',
      sinkEndpointId: 'SinkEndpointId',
      sourceEndpointId: 'SourceEndpointId',
      structTransferConfig: 'StructTransferConfig',
      transferMapping: 'TransferMapping',
      type: 'Type',
      useOss: 'UseOss',
      workerGradeId: 'WorkerGradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonTransferConfig: CreateProjectRequestCommonTransferConfig,
      enableFullTransfer: 'boolean',
      enableFullVerify: 'boolean',
      enableIncrTransfer: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferConfig: CreateProjectRequestFullTransferConfig,
      id: 'string',
      incrTransferConfig: CreateProjectRequestIncrTransferConfig,
      labelIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      ossKey: 'string',
      reverseIncrTransferConfig: CreateProjectRequestReverseIncrTransferConfig,
      sinkEndpointId: 'string',
      sourceEndpointId: 'string',
      structTransferConfig: CreateProjectRequestStructTransferConfig,
      transferMapping: CreateProjectRequestTransferMapping,
      type: 'string',
      useOss: 'boolean',
      workerGradeId: 'string',
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
    if(Array.isArray(this.labelIds)) {
      $dara.Model.validateArray(this.labelIds);
    }
    if(this.reverseIncrTransferConfig && typeof (this.reverseIncrTransferConfig as any).validate === 'function') {
      (this.reverseIncrTransferConfig as any).validate();
    }
    if(this.structTransferConfig && typeof (this.structTransferConfig as any).validate === 'function') {
      (this.structTransferConfig as any).validate();
    }
    if(this.transferMapping && typeof (this.transferMapping as any).validate === 'function') {
      (this.transferMapping as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

