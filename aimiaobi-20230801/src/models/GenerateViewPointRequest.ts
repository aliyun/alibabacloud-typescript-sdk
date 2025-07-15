// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateViewPointRequestReferenceData extends $dara.Model {
  miniDoc?: string[];
  static names(): { [key: string]: string } {
    return {
      miniDoc: 'MiniDoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniDoc: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.miniDoc)) {
      $dara.Model.validateArray(this.miniDoc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateViewPointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  referenceData?: GenerateViewPointRequestReferenceData;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      referenceData: 'ReferenceData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      referenceData: GenerateViewPointRequestReferenceData,
    };
  }

  validate() {
    if(this.referenceData && typeof (this.referenceData as any).validate === 'function') {
      (this.referenceData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

