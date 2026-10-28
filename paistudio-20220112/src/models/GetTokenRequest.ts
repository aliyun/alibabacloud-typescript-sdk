// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The expiration duration of the sharing link, in seconds. Default value: 604800 seconds. Minimum value: 0 seconds.
   * 
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * The ID of the training job.
   * 
   * This parameter is required.
   * 
   * @example
   * traincclrt205dcs
   */
  trainingJobId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      trainingJobId: 'TrainingJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      trainingJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

