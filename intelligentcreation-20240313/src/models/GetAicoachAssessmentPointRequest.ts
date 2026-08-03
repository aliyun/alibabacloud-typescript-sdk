// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachAssessmentPointRequest extends $dara.Model {
  pointId?: string;
  static names(): { [key: string]: string } {
    return {
      pointId: 'pointId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pointId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

