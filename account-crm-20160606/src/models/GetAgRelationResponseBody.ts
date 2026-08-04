// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgRelationResponseBodyAgRelationDto extends $dara.Model {
  mpk?: string;
  pk?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      pk: 'Pk',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      pk: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgRelationResponseBody extends $dara.Model {
  agRelationDto?: GetAgRelationResponseBodyAgRelationDto;
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agRelationDto: 'AgRelationDto',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agRelationDto: GetAgRelationResponseBodyAgRelationDto,
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.agRelationDto && typeof (this.agRelationDto as any).validate === 'function') {
      (this.agRelationDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

