// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTargetScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language filter for samples, in locale format (such as zh_CN or en_US, which is internally normalized to zh or en). If this parameter is not specified, samples are selected based on the default language policy combined with general-purpose samples.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The detection intensity. The backend derives the corresponding technique level based on this value. If this parameter is not specified, the system falls back to the scan task configuration saved for the target, and then to the system default value.
   * 
   * @example
   * 3
   */
  sampleLevel?: number;
  /**
   * @remarks
   * The unique identifier of the scan target. The target must have passed connectivity verification (verifyStatus=verified). Otherwise, a 400 error is returned. You can call TestConnectivity to complete the verification first.
   * 
   * This parameter is required.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sampleLevel: 'SampleLevel',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sampleLevel: 'number',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

