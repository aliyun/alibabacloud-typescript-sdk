// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditRoutineConfShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the routine.
   * 
   * @example
   * the description of this routine
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the specified environment.
   * 
   * @example
   * {"staging":{"SpecName":"50ms","AllowedHosts":["test-a.alicdn.com","test-b.alicdn.com"]},"production":{"SpecName":"50ms","AllowedHosts":["test-c.alicdn.com","test-d.alicdn.com"]},"presetCanaryZhejiang":{"SpecName":"100ms","AllowedHosts":["test-e.alicdn.com","test-f.alicdn.com"]},"presetCanaryBeijing":{"SpecName":"5ms","AllowedHosts":["test-g.alicdn.com","test-h.alicdn.com"]},"presetCanaryNotExist":{"SpecName":"5ms","CodeRev":"1622446907645949975","AllowedHosts":["error hosts"]}}
   */
  envConfShrink?: string;
  /**
   * @remarks
   * The name of the routine. The name must be unique among the routines that belong to the same Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * test-slc
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      envConfShrink: 'EnvConf',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      envConfShrink: 'string',
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

